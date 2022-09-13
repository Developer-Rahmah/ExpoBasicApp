import React from "react";
import { VStack, Input } from "native-base";
import { LocaleKeys, Translate } from "localization";
import { Colors, commonStyles, Fonts } from "lib/constants";
import Search from "assets/svgs/SVGSearch";
import { SearchBarProps } from "components/types";

// constants.
const inputBorderRadius = 16;
/**
 * A function component that shows a search bar.
 */
function SearchBar({
  onSearch,
  containerStyle,
  onTouchStart,
  placeholder = Translate(LocaleKeys.common.search),
}: SearchBarProps) {
  // Renders input search icon.
  const renderInputSearchIcon = () => {
    return <Search onTouchStart={onTouchStart} style={commonStyles.marginL8} />;
  };

  return (
    <VStack style={containerStyle} width="100%" space={2}>
      <Input
        fontFamily={Fonts.book}
        borderTopLeftRadius={inputBorderRadius}
        borderBottomLeftRadius={inputBorderRadius}
        borderTopRightRadius={inputBorderRadius}
        borderBottomRightRadius={inputBorderRadius}
        backgroundColor={Colors.semiTrans}
        height={45}
        placeholder={placeholder}
        variant="filled"
        width="100%"
        borderRadius={10}
        py={1}
        px={2}
        InputLeftElement={renderInputSearchIcon()}
        onEndEditing={(e) => onSearch && onSearch(e.nativeEvent.text)}
      />
    </VStack>
  );
}

// export as default.
export default SearchBar;
