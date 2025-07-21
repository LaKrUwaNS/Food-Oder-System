import { useRouter } from "next/router";

const CityPage = () => {
    const router = useRouter();
    const { cityName } = router.query;

    return (
        <div className="text-center p-10">
            <h1 className="text-3xl font-bold capitalize">
                Welcome to {cityName?.toString().replace("-", " ")}
            </h1>
            <p className="mt-4 text-gray-600">Services available in this city.</p>
        </div>
    );
};

export default CityPage;
