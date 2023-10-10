import React from "react";

import { Text as RNText } from "react-native";

import PropTypes from "prop-types";

// export class Typography extends React.Component {
//   render() {
//     return (
//       <RNText
//         style={{ color: this.props.color, fontSize: this.props.fontSize }}>
//         {this.props.children}
//       </RNText>
//     );
//   }
// }

interface TypographyProps {
  color?: string; // color는 선택적인 프로퍼티로 지정
  fontSize: number; // isRequired에 따라 필수 프로퍼티로 지정
  children: React.ReactNode; // 기본적으로 ReactNode 타입을 사용 (문자열 또는 React 요소를 포함할 수 있음)
}

export const Typography = (props: TypographyProps) => {
  return (
    <RNText style={{ color: props.color, fontSize: props.fontSize }}>
      {props.children}
    </RNText>
  );
};

Typography.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.number.isRequired,
  //   children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
  //     .isRequired,
};
