import { useRouter } from "next/router";

const StorePage = () => {
    const router = useRouter();
    const { id } = router.query;
    return <div>Store Detail {id}</div>;
};

export default StorePage;
