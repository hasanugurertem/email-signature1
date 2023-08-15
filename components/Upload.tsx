import useInfoStore from "../store/infoStore";

const Upload = () => {
    const {
        onImageChange,
    } = useInfoStore();

    return (
        <>
            <div className="m-6">
                <h1 className="not-italic text-3xl font-bold mb-4">Upload email signature HTML</h1>
                <h1 className="not-italic text-l mb-4">Upload the HTML code you generated the last time you were here.</h1>
                <br />
                <label

                    className="-mt-4 block p-2 bg-black border border-black rounded-lg font-semibold text-xl text-white hover:text-gray-700 transition-colors"
                    htmlFor="image"
                    style={{ width: "180px", display: "flex", justifyContent: "center", alignItems: "center" }}
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
                <p className="-mt-4 text-xs text-gray-600">*Be sure to add it in a .html file. This option isn't available for the plain text template</p>
            </div>
        </>
    );
};

export default Upload;
