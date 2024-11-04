import "nativewind/types";

declare module "react-native" {
  interface ViewStyle {
    className?: string;
  }
  interface TextStyle {
    className?: string;
  }
  interface ImageStyle {
    className?: string;
  }
}