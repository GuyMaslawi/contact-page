import { NAV_LINKS } from "../constants";
import { Wrapper } from "./Nav.style";

const Nav = () => {
  return (
    <Wrapper>
      <ul>
        {NAV_LINKS.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Nav;
