import React, { useState } from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";

function Filter({ isToggle, onClick }) {

  return (
    <Container
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick = {onClick}
    >
      <motion.div
        style={{
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Horizontal Bar */}
        <motion.div
          style={{
            position: "absolute",
            width: 30,
            height: 3,
            backgroundColor: "#08acb4",
            borderRadius: 2,
          }}
          animate={{
            rotate: isToggle ? 45 : 90,
            y: isToggle ? 0 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        {/* Vertical Bar */}
        <motion.div
          style={{
            position: "absolute",
            width: 30,
            height: 3,
            backgroundColor: "#08acb4",
            borderRadius: 2,
          }}
          animate={{
            rotate: isToggle ? -45 : 0,
            y: isToggle ? 0 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Container>
  );
}

export default Filter;
