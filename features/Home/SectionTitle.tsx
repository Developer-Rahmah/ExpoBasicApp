import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Text } from "components";
import {
  CalendarIcon,
  SpeakersIcon,
  ProductIcon,
  NewsIcon,
  CrowdfundingIcon,
  ELearning,
} from "assets/svgs";
import { Translate, LocaleKeys } from "localization";
import { commonStyles } from "lib/constants";
import { SectionTitleProps } from "features/types";

/**
 * A function component that shows a section title.
 */
function SectionTitle({ title, type, onViewAllPress }: SectionTitleProps) {
  /**
   * Renderes svg icon.
   */
  const renderSvgIcon = () => {
    let c = null;
    switch (type) {
      case "calendar":
        c = <CalendarIcon />;
        break;

      case "speakers":
        c = <SpeakersIcon />;
        break;

      case "crowdfundingDeals":
        c = <CrowdfundingIcon />;
        break;

      case "product":
        c = <ProductIcon />;
        break;

      case "news":
        c = <NewsIcon />;
        break;

      case "eLearning":
        c = <ELearning />;
        break;
    }

    return c;
  };

  return (
    <View
      style={[
        styles.sectionTitleContainer,
        commonStyles.paddingH16,
        styles.paddingRight,
      ]}
    >
      <View style={styles.leftContainer}>
        {renderSvgIcon()}
        <Text style={styles.sectionTitleTxt} text={title} />
      </View>

      {!!onViewAllPress && (
        <TouchableOpacity onPress={onViewAllPress}>
          <View pointerEvents={"none"}>
            <Text
              style={styles.viewAllTxt}
              text={`${Translate(LocaleKeys.common.viewAll)}  >`}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

// export as default.
export default SectionTitle;
