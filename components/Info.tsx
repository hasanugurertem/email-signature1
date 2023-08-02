import useInfoStore from "../store/infoStore";
import Heading from "./Heading";
import Description from "./Description";
import InputText from "./InputText";
import { validateEmail } from "../utils/validation";


const Info = () => {
  const {
    infoOutput,
    setInfoOutput,
    handleChange,
    onImageChange,
    isValidLink,
  } = useInfoStore();

  const {
    textInput,
    signOff,
    fullName,
    jobTitle,
    company,
    workAddress,
    phoneNumber,
    workEmail,
    website,
    LinkedInLink,
    GitHubLink,
    YouTubeLink,
    TwitterLink,
    FacebookLink,
    InstagramLink,
    image,
  } = infoOutput;

  const signOffData = [
    {
      label: "Sign-off",
      id: "signOff",
      name: "signOff",
      value: signOff,
    },
  ];

  const inputTextData = [
    {
      label: "Full Name",
      id: "fullName",
      name: "fullName",
      value: fullName,
      type: "text",
    },
    {
      label: "Job Title",
      id: "jobTitle",
      name: "jobTitle",
      value: jobTitle,
      type: "text",
    },
    {
      label: "Company",
      id: "company",
      name: "company",
      value: company,
      type: "text",
    }
  ];

  const contactInfo = [
    {
      label: "Work Address",
      id: "workAddress",
      name: "workAddress",
      value: workAddress,
      type: "text",
    },
    {
      label: "Phone Number",
      id: "phoneNumber",
      name: "phoneNumber",
      value: phoneNumber,
      type: "text",
    },
    {
      label: "Work Email",
      id: "workEmail",
      name: "workEmail",
      value: workEmail,
      type: "email",
      isValidEmail: validateEmail(workEmail),
    },
    {
      label: "Website",
      id: "website",
      name: "website",
      value: website,
      type: "text",
    },
  ];

  const inputTextLinkData = [
    {
      label: "LinkedIn",
      id: "LinkedInLink",
      name: "LinkedInLink",
      value: LinkedInLink,
    },
    {
      label: "GitHub",
      id: "GitHubLink",
      name: "GitHubLink",
      value: GitHubLink,
    },
    {
      label: "YouTube",
      id: "YouTubeLink",
      name: "YouTubeLink",
      value: YouTubeLink,
    },
    {
      label: "Twitter",
      id: "TwitterLink",
      name: "TwitterLink",
      value: TwitterLink,
    },
    {
      label: "Facebook",
      id: "FacebookLink",
      name: "FacebookLink",
      value: FacebookLink,
    },
    {
      label: "Instagram",
      id: "InstagramLink",
      name: "InstagramLink",
      value: InstagramLink,
    },
  ];

  return (
    <>
      <div className="m-4">
        <div className="p-1">
          <Heading
            primary="Your info"
            secondary="Type in your data to see how it looks on the template"
          />
        </div>

        <div className="m-4 pb-4">
          {signOffData.map((item) => (
            <InputText
              key={item.id}
              label={item.label}
              id={item.id}
              name={item.name}
              value={item.value}
              onChange={handleChange}
            />
          ))}
        </div>
        <div className="mx-2 my-1">
          <Description
            primary="Add photo"
            secondary="Pick your best photo (square or round), and click the question mark icon below to see how to add it."
          />
        </div>
        <div className="ml-2">
          <label
            className="block w-fit p-4 bg-background border border-black rounded-lg font-semibold text-black-full hover:text-gray-700 transition-colors"
            htmlFor="image"
          >
            Upload Image
          </label>
          <input
            className="hidden"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={onImageChange}
          />
        </div>
      </div>


      <div className="m-4 pb-4">
        <div className="m-2 py-4">
          <Description
            primary="Personal & business info"
            secondary="Fill in your data. Don't want to use a field? Delete the placeholder text."
          />
        </div>
        {inputTextData.map((item) => (
          <InputText
            key={item.id}
            label={item.label}
            id={item.id}
            name={item.name}
            value={item.value}
            onChange={handleChange}
            type={item.type as "text" | "email"}
            isValidEmail={item.type === "email" ? validateEmail(item.value) : true}
          />
        ))}
      </div>

      <div className="m-4 pb-4">
        <div className="m-2 py-4">
          <Description
            primary="Contact info"
            secondary="Type in your contact information."
          />
        </div>
        {contactInfo.map((item) => (
          <InputText
            key={item.id}
            label={item.label}
            id={item.id}
            name={item.name}
            value={item.value}
            onChange={handleChange}
            type="link"
            isValidLink={isValidLink(item.value)}
          />
        ))}
      </div>

      <div className="m-4 pb-4">
        <div className="m-2 py-4">
          <Description
            primary="Social media links"
            secondary="Add your social media profiles. URLs should start with https://."
          />
        </div>
        {inputTextLinkData.map((item) => (
          <InputText
            key={item.id}
            label={item.label}
            id={item.id}
            name={item.name}
            value={item.value}
            onChange={handleChange}
            type="link"
            isValidLink={isValidLink(item.value)}
          />
        ))}
      </div>
    </>
  );
};

export default Info;
