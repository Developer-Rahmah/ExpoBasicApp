import { useEffect } from "react";
import { FlatList, Image, RefreshControl, View } from "react-native";
import { NoData, ScreenLoader, SearchBar, Text } from "../../components";
import Routes from "../../routes/Routes";
import styles from "./styles";
import { commonStyles } from "lib/constants";
import { HomeScreenProps } from "navigationTypes";
import ContentService from "services/ContentService";
import useService from "customhooks/useService";
import { RandomUser } from "lib/api/api";
import ListFooter from "./ListFooter";
import { MomentHelper } from "helpers";

const limit = 10;

/**
 * A function component that shows a home screen.
 */
function HomeScreen({ navigation }: HomeScreenProps) {
  // use load hook.
  const {
    data,
    isFetching,
    isRefreshing,
    request: apiRequest,
    refresh: apiRefresh,
    setData,
  } = useService<RandomUser>({
    apiCall: ContentService.getRandomUsers,
  });

  // Gets the first page of items.
  useEffect(() => {
    apiRequest(limit);
  }, []);
  console.log("dddata", data);
  /**
   * Handles refresh.
   */
  const handleRefresh = () => {
    apiRefresh(limit);
  };

  /**
   * Handles search.
   */
  const handleSearch = (searchTerm: string) => {
    if (searchTerm.length > 0) {
      const dataAfterFilter = data.filter((item) => {
        const itemData = `${item.name.first} ${item.name.last}`;
        return itemData.indexOf(searchTerm) > -1;
      });

      setData(dataAfterFilter);
    } else {
      apiRequest(limit);
    }
  };

  /**
   * Handless avatar press.
   */
  const handleAvatarPress = () => {
    navigation.navigate<any>(Routes.Profile, {
      screen: Routes.Profile,
      initial: false,
    });
  };
  /**
   * Extractes key for the list.
   */
  const getKeyExtractor = (it: RandomUser) => it.email;

  /**
   * Renders member item.
   */
  const renderMemberItem = ({
    item,
    index,
  }: {
    item: RandomUser;
    index: number;
  }) => {
    // constants.
    const fullName =
      (item.name.first || "") + " " + (item.name.last || "").trim();
    console.log("iteeem", item.picture);
    return (
      <View style={[styles.li, index === 0 && styles.liFirstItem]}>
        <View style={styles.internalLi}>
          <Image
            source={{
              uri: item.picture.large,
            }}
            style={styles.img}
          />
          <View style={styles.liRightView}>
            <View style={styles.liLeftView}>
              <Text style={styles.liTitle} text={fullName} />
            </View>
            {/* <Text style={styles.dobTxt} text={`${parseInt(moment(item.dob.date).fromNow()) - 1} year ago`} /> */}
            <Text
              style={styles.dobTxt}
              text={`${MomentHelper.getFormatted(item.dob.date, "timeAgo")}`}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={[commonStyles.paddingH16, commonStyles.marginT16]}>
        <SearchBar
          containerStyle={styles.searchBarContainer}
          onSearch={handleSearch}
        />
      </View>

      {data?.length > 0 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          renderItem={renderMemberItem}
          data={data}
          keyExtractor={getKeyExtractor}
          refreshControl={
            <RefreshControl
              onRefresh={handleRefresh}
              refreshing={isRefreshing}
            />
          }
          ListFooterComponent={() => ListFooter()}
          onEndReachedThreshold={0.5}
        />
      )}

      {isFetching && <ScreenLoader />}
      {data.length === 0 && <NoData />}
    </View>
  );
}

export default HomeScreen;
