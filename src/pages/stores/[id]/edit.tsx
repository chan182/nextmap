import { useRouter } from "next/router";
import React from "react";

const StoreEditPage = () => {
    const router = useRouter();
    console.log(router);
    const { id } = router.query;
    return <div>StoreEditPage {id}</div>;
};

export default StoreEditPage;
