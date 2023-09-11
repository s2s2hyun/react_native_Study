import { Image, Text, View } from "react-native";
import Margin from "./styles/Margin";
import styled, { css } from "@emotion/native";

const ProfileComponent = ({ uri, name, introduction, isMe }) => {
  const size = isMe ? 50 : 40;

  return (
    <Container>
      <ProfileImage
        source={{ uri }}
        // style={{ width: size, height: size, borderRadius: size * 0.4 }}
        size={size}
        alt="myprofile"
      />
      <TextContainer>
        <NameText isMe={isMe}>{name}</NameText>

        {!!introduction && (
          <View>
            <Margin height={isMe ? 6 : 2} />
            <IntroductionText isMe={isMe}>{introduction}</IntroductionText>
          </View>
        )}
      </TextContainer>
    </Container>
  );
};

export default ProfileComponent;

const Container = styled.View`
  flex-direction: row;
`;

const ProfileImage = styled.Image((props) => ({
  width: props.size,
  height: props.size,
  borderRadius: props.size * 0.4,
}));

// const ProfileImage = styled.Image`
//   width: ${(props) => props.size}px;
//   height: ${(props) => props.size}px;
//   border-radius: ${(props) => props.size * 0.4}px;
// `;

const TextContainer = styled.View`
  justify-content: center;
  margin-left: 10px;
`;

const NameText = styled.Text((props) => ({
  fontWeight: props.isMe ? "bold" : "normal",
  fontSize: props.isMe ? 24 : 15,
}));

// const NameText = styled.Text`
//   font-weight: ${(props) => (props.isMe ? "bold" : "normal")};
//   font-size: ${(props) => (props.isMe ? 24 : 100)}px;
// `;

// const IntroductionText = styled.Text`
//   font-size: ${(props) => (props.isMe ? 20 : 100)}px;
//   color: grey;
// `;

const IntroductionText = styled.Text((props) => ({
  fontSize: props.isMe ? 12 : 11,
  color: "grey",
}));
