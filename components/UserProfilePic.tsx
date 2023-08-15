import useCustomizationStore from "@/store/customizationStore";
import useInfoStore from "@/store/infoStore";
import { useTemplateStore } from "@/store/templateStore";
import Image from "next/image";

const UserProfilePic = () => {
  const { imageSize } = useCustomizationStore();
  const { image } = useInfoStore();
  const { template } = useTemplateStore();

  if (template.id === "plainText") {
    return null;
  }
  return (
    <img src={image} alt="Profile Image" width={imageSize} height={imageSize} />
  );
};

export default UserProfilePic;
