import React, { useState } from "react";
import Modal from "./Modal";
import Score from "./Score";

function TagRecommendationModal({ visible, onModalClose }) {
  const onClose = () => {
    onModalClose();
  };

  return (
    <Modal visible={visible} width={"400px"}>
      <Score onClose={onClose}></Score>
    </Modal>
  );
}

export default TagRecommendationModal;
