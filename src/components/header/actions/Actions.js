import React from "react";
import { HEADER_ACTIONS } from "../../constants";
import { ActionsWrapper, TopLinks } from "./Actions.style";
import MoreActionsButton from "./more-actions-button/MoreActionsButton";

const Actions = () => {
  return (
    <ActionsWrapper>
      <TopLinks>
        {HEADER_ACTIONS.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </TopLinks>
      <MoreActionsButton />
    </ActionsWrapper>
  );
};

export default Actions;
