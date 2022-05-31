import React, { useState } from "react";
import Modal from "./Modal";
import Score from "./Score";

function TagRecommendationModal() {
  const [visible, setVisible] = useState(true);

  return (
    <Modal visible={visible} width={"400px"}>
      <Score></Score>
    </Modal>
  );
}

export default TagRecommendationModal;
