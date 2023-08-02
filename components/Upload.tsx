import useInfoStore from "../store/infoStore";
import Heading from "./Heading";
import Description from "./Description";
import InputText from "./InputText";
import { validateEmail } from "../utils/validation";


const Info = () => {
    const {
        onImageChange,
    } = useInfoStore();

    return (
        <>
            <div className="m-6">
                <h1 className="text-3xl font-bold mb-4">Upload email signature HTML</h1>
                <h1 className="text-lg mb-4">Upload the HTML code you generated the last time you were here.</h1>
                <br />
                <label

                    className="block p-4 bg-black border border-black rounded-lg font-semibold text-white hover:text-gray-700 transition-colors"
                    htmlFor="image"
                    style={{ width: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    CHOOSE FILE
                </label>
                <input
                    className="hidden"
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={onImageChange}
                />
                <br />
                <p className="text-gray-600">*Be sure to add it in a .html file. This option isn't available for the plain text template</p>
            </div>
        </>
    );
};

export default Info;
