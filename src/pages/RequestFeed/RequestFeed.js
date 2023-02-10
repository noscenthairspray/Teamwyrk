import React from "react";
import { FeedLayout, RequestItem } from "./components";
import RequestModal from "./components/RequestModal";

const RequestFeed = () => {
  const [open, setOpenModal] = React.useState(false);

  return (
    <>
      <FeedLayout>
        <RequestItem handleClickEmail={() => setOpenModal(true)} />
        <RequestItem handleClickEmail={() => setOpenModal(true)} />
        <RequestItem handleClickEmail={() => setOpenModal(true)} />
        <RequestItem handleClickEmail={() => setOpenModal(true)} />
        <RequestItem handleClickEmail={() => setOpenModal(true)} />
        <RequestItem handleClickEmail={() => setOpenModal(true)} />
        <RequestItem handleClickEmail={() => setOpenModal(true)} />
        <RequestItem handleClickEmail={() => setOpenModal(true)} />
      </FeedLayout>
      <RequestModal open={open} setOpen={setOpenModal} />
    </>
  );
};

export default RequestFeed;
