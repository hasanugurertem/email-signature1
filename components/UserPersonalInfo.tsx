import useCustomizationStore from "@/store/customizationStore";
import useInfoStore from "@/store/infoStore";

const UserPersonalInfo = () => {
  const {
    signOff,
    fullName,
    jobTitle,
    company,
    workAddress,
    phoneNumber,
    workEmail,
    website,
  } = useInfoStore();
  const { fontSize, nameFont, linkColor, textColor, nameColor } =
    useCustomizationStore();

  return (
    <table
    cellPadding={0}
    cellSpacing={0}
      style={{
        fontSize: `${fontSize}px`,
        fontFamily: nameFont,
        color: textColor,
        borderCollapse: "collapse"
      }}
    >
      <tr>
        <td>{signOff}</td>
      </tr>
      <tr style={{ color: nameColor }}>
        <td>{fullName}</td>
      </tr>
      <tr>
        <td>
          {jobTitle}
          {jobTitle && company ? " | " : ""}
          {company}
        </td>
      </tr>
      <tr>
        <td>{workEmail}</td>
      </tr>
      <tr style={{ color: linkColor }}>
        <td>{website}</td>
      </tr>
      <tr>
        <td>{phoneNumber}</td>
      </tr>
      <tr>
        <td>{workAddress}</td>
      </tr>
    </table>
  );
};

export default UserPersonalInfo;
