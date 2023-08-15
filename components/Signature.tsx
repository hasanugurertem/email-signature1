import UserProfilePic from "./UserProfilePic";
import UserPersonalInfo from "./UserPersonalInfo";
import UserLinkIcons from "./UserLinkIcons";
import { useTemplateStore } from "@/store/templateStore";

const Signature = () => {
  const { template } = useTemplateStore();

  if (
    template.id === "plainText" ||
    template.id === "template1Left" ||
    template.id === "template1Right" ||
    template.id === "template2Left" ||
    template.id === "template2Right"
  ) {
    return (
      <table className="signaturetrying" cellPadding={16} cellSpacing={0} style={{ borderCollapse: "collapse" }}>
        <tr>
          <td style={{ paddingRight: "2rem" }}>
            {template.id === "template1Left" || template.id === "template2Left" ? <UserProfilePic /> : <UserPersonalInfo />}
          </td>
          <td>
            {template.id === "template1Left" || template.id === "template2Left" ? <UserPersonalInfo /> : <UserProfilePic />}
          </td>
        </tr>
        <tr>
          <td>
            {template.id === "template1Left" || template.id === "template2Right" ? null : <UserLinkIcons />}
          </td>
          <td>
            {template.id === "template1Left" || template.id === "template2Right" ? <UserLinkIcons /> : null}
          </td>
        </tr>
      </table>
    );
  } else if (template.id === "template3Top") {
    return (
      <table className="signaturetrying" cellPadding={0} cellSpacing={0} style={{ borderCollapse: "collapse" }}>
        <tr>
          <UserProfilePic />
        </tr>
        <tr>
          <UserPersonalInfo />
        </tr>
        <tr>
          <UserLinkIcons />
        </tr>
      </table>
    );
  } else if (template.id === "template3Bottom") {
    return (
      <table className="signaturetrying" cellPadding={0} cellSpacing={0} style={{ borderCollapse: "collapse" }}>
        <tr>
          <UserPersonalInfo />
        </tr>
        <tr>
          <UserLinkIcons />
        </tr>
        <tr>
          <UserProfilePic />
        </tr>
      </table>
    );
  }
};

export default Signature;
