import React from "react";

import Consult from "/icons/CG.svg";
import Medal from "/icons/medal.svg";
import Shipping from "/icons/shipping.svg";
import Tags from "/icons/tag.svg";

const iconTypes = {
  consult: Consult,
  medal: Medal,
  shipping: Shipping,
  tags: Tags,
};

interface ICons {
  name:string
}

const IconComponent = <ICons>({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
