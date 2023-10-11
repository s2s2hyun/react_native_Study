import React from "react";
import { Image as RNImage, ImageStyle, StyleProp } from "react-native";

// export class RemoteImage extends React.Component {
//   render() {
//     return (
//       <RNImage
//         source={{ uri: this.props.url }}
//         style={[
//           this.props.style,
//           { width: this.props.width, height: this.props.height },
//         ]}
//       />
//     );
//   }
// }

type RemoteImageProps = {
  url: string;
  style?: StyleProp<ImageStyle>;
  width?: number;
  height?: number;
};

export const RemoteImage = (props: RemoteImageProps) => {
  return (
    <RNImage
      source={{ uri: props.url }}
      style={[props.style, { width: props.width, height: props.height }]}
    />
  );
};
