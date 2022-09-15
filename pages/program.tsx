import Layout from "components/common/Layout";
import Modal from "components/common/Modal";
import ProgramContent from "components/Pages/Program/ProgramContent";
import { useState } from "react";

const program = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isModalOn, setIsModalOn] = useState<boolean>(true);
  return (
    <Layout>
      <ProgramContent />
      {isModalOn && <Modal setModal={setIsModalOn} />}
    </Layout>
  );
};

export default program;
