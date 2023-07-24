import React from "react";
import { SetStateAction, useState } from "react";

import Image from "next/image";

import iconLinkedIn from "../assets/iconLinkedIn.ico";
import iconGitHub from "../assets/iconGitHub.ico";
import iconTwitter from "../assets/iconTwitter.ico";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [linkLinkedIn, setLinkLinkedIn] = useState("");
  const [linkGitHub, setLinkGitHub] = useState("");
  const [linkTwitter, setLinkTwitter] = useState("");

  const [photo, setPhoto] = useState("");

  const onPhotoChange = (photo: any) => {
    if (photo.target.files && photo.target.files[0]) {
      setPhoto(URL.createObjectURL(photo.target.files[0]));
    }
  };

  const [layout, setLayout] = useState("");
  const handleLayoutChange = async (
    selectedTemplate: SetStateAction<string>,
  ) => {
    setLayout(selectedTemplate);
  };

  return (
    <div className="grid grid-cols-6">
      <div
        className="z-30 h-screen w-[240px] p-6 bg-white
      flex flex-col items-center overflow-wrap"
      >
        <p>T E S T</p>
      </div>

      <div
        className="z-20 h-screen col-span-2 min-w-[480px] max-w-[720px] p-6 bg-white
      flex flex-col items-center overflow-wrap overflow-y-auto"
      >
        <div
          className="w-full p-6
        border-b border-gray-100"
        >
          <h1 className="text-2xl font-bold text-nureply-blue-full underline decoration-nureply-blue">
            Layouts
          </h1>
          <p className="text-base text-gray-600">
            Choose a layout for your email signature first
          </p>
        </div>
        <input
          onClick={() => handleLayoutChange("layout-default")}
          type="radio"
          id="layout-default"
          name="layout"
          value="layout"
          className="sr-only peer peer-checked:checked"
          checked
        />
        <label
          htmlFor="layout-default"
          className="w-full mt-6 p-6 px-9 rounded-lg hover:shadow
          text-base font-semibold text-gray-600 hover:text-nureply-blue cursor-pointer"
        >
          Default
        </label>
        <input
          onClick={() => handleLayoutChange("layout-foursquare")}
          type="radio"
          id="layout-foursquare"
          name="layout"
          value="layout"
          className="sr-only peer peer-checked:checked"
        />
        <label
          htmlFor="layout-foursquare"
          className="w-full mt-6 p-6 px-9 rounded-lg hover:shadow
          text-base font-semibold text-gray-600 hover:text-nureply-blue cursor-pointer"
        >
          Foursquare
        </label>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>
          functionality intact, will be fixed later with step by step
          customization being added
        </p>
        <div className="p-1 text-base text-gray-600 hover:text-nureply-blue font-semibold"></div>
        <div className="my-4 border-b border-gray-100 pb-4">
          <label
            htmlFor="name"
            className="p-1 text-base text-gray-600 font-semibold"
          >
            Name
          </label>
          <input
            className="text-black border-2"
            type="text"
            id="name"
            name="name"
            onChange={(name) => setName(name.target.value)}
            value={name}
          />
          <label
            htmlFor="profession"
            className="p-1 text-base text-gray-600 font-semibold"
          >
            Profession
          </label>
          <input
            className="text-black border-2"
            type="text"
            id="profession"
            name="profession"
            onChange={(profession) => setProfession(profession.target.value)}
            value={profession}
          />
          <label
            htmlFor="phone"
            className="p-1 text-base text-gray-600 font-semibold"
          >
            Phone
          </label>
          <input
            className="text-black border-2"
            type="text"
            id="phone"
            name="phone"
            onChange={(phone) => setPhone(phone.target.value)}
            value={phone}
          />
          <label
            htmlFor="email"
            className="p-1 text-base text-gray-600 font-semibold"
          >
            Email
          </label>
          <input
            className="text-black border-2"
            type="text"
            id="email"
            name="email"
            onChange={(email) => setEmail(email.target.value)}
            value={email}
          />
          <label
            htmlFor="link"
            className="p-1 text-base text-gray-600 font-semibold"
          >
            Link
          </label>
          <input
            className="text-black border-2"
            type="text"
            id="link"
            name="link"
            onChange={(link) => setLink(link.target.value)}
            value={link}
          />
          <label
            htmlFor="link-LinkedIn"
            className="p-1 text-base text-nureply-blue font-semibold"
          >
            LinkedIn
          </label>
          <input
            className="text-black border-2"
            type="text"
            id="link-LinkedIn"
            name="link-LinkedIn"
            onChange={(linkLinkedIn) =>
              setLinkLinkedIn(linkLinkedIn.target.value)
            }
            value={linkLinkedIn}
          />
          <label
            htmlFor="link-GitHub"
            className="p-1 text-base text-nureply-blue font-semibold"
          >
            GitHub
          </label>
          <input
            className="text-black border-2"
            type="text"
            id="link-GitHub"
            name="link-GitHub"
            onChange={(linkGitHub) => setLinkGitHub(linkGitHub.target.value)}
            value={linkGitHub}
          />
          <label
            htmlFor="link-Twitter"
            className="p-1 text-base text-nureply-blue font-semibold"
          >
            Twitter
          </label>
          <input
            className="text-black border-2"
            type="text"
            id="link-Twitter"
            name="link-Twitter"
            onChange={(linkTwitter) => setLinkTwitter(linkTwitter.target.value)}
            value={linkTwitter}
          />
        </div>
        workEmail: '', website: '', signOff: '', LinkedInLink: '', GitHubLink:
        '', ArtStationLink: '', YoutubeLink: '', TwitterLink: '', FacebookLink:
        '', InstagramLink: '',
        <div>
          <label
            htmlFor="photo"
            className="p-1 text-base text-nureply-blue hover:text-nureply-blue-full font-semibold"
          >
            Upload Photo
          </label>
          <input
            className="hidden"
            type="file"
            id="photo"
            name="photo"
            accept="image/png, image/jpeg"
            onChange={onPhotoChange}
          />
        </div>
      </div>

      <div className="col-span-3">
        {layout === "layout-default" ? (
          <LayoutDefault />
        ) : layout === "layout-foursquare" ? (
          <LayoutFoursquare />
        ) : null}
      </div>
    </div>
  );

  function LayoutDefault() {
    return (
      <div className="flex m-3 fixed bg-white rounded-full overflow-hidden">
        <div className="border-2 rounded-full overflow-hidden m-9">
          <Image src={photo} width={270} height={270} alt="" />
        </div>
        <div className="p-9">
          <div className="p-3">
            <h1 className="text-3xl font-bold">{name}</h1>
            <h2 className="text-lg">{profession}</h2>
            <hr></hr>
          </div>
          <div className="p-3">
            <p>{phone}</p>
            <a
              className="text-nureply-blue-full hover:text-nureply-blue"
              href=""
            >
              {email}
            </a>
            <hr></hr>
            <div>
              <a
                className="text-nureply-blue-full hover:text-nureply-blue"
                href=""
              >
                {link}
              </a>
              <hr></hr>
            </div>
          </div>
          <div>
            <div className="flex m-0 pl-3">
              <div className="pr-3">
                <a href={linkLinkedIn}>
                  <Image src={iconLinkedIn} width={30} height={30} alt="" />
                </a>
              </div>
              <div className="pr-3">
                <a href={linkGitHub}>
                  <Image src={iconGitHub} width={30} height={30} alt="" />
                </a>
              </div>
              <div className="pr-3">
                <a href={linkTwitter}>
                  <Image src={iconTwitter} width={30} height={30} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="m-32"></div>
      </div>
    );
  }

  function LayoutFoursquare() {
    return (
      <div className="flex m-9 mr-32 fixed bg-white rounded-3xl overflow-hidden">
        <div className="p-10">
          <div className="p-3">
            <h1 className="text-3xl font-bold">{name}</h1>
            <h2 className="text-lg">{profession}</h2>
            <hr></hr>
          </div>
          <div className="p-3">
            <p>{phone}</p>
            <a
              className="text-nureply-blue-full hover:text-nureply-blue"
              href=""
            >
              {email}
            </a>
            <hr></hr>
          </div>
          <div className="ml-3">
            <div>
              <a href={linkLinkedIn}>
                <Image src={iconLinkedIn} width={30} height={30} alt="" />
              </a>
            </div>
            <div className="pt-2">
              <a href={linkGitHub}>
                <Image src={iconGitHub} width={30} height={30} alt="" />
              </a>
            </div>
            <div className="pt-2">
              <a href={linkTwitter}>
                <Image src={iconTwitter} width={30} height={30} alt="" />
              </a>
            </div>
            <div>
              <hr className="mt-2"></hr>
              <a
                className="text-nureply-blue-full hover:text-nureply-blue"
                href=""
              >
                {link}
              </a>
            </div>
          </div>
        </div>
        <div className="mx-60"></div>
        <div className="border-2 rounded-3xl fixed overflow-hidden m-12 ml-96 float-right">
          <Image src={photo} width={300} height={300} alt="" />
        </div>
      </div>
    );
  }
}
