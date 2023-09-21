import { Text } from "@sanity/ui";
import { LogoProps } from "sanity";
import { CSSProperties } from "styled-components";
const logoStyles:CSSProperties = {
    color: 'magenta',
    fontWeight: 'bold',
    textShadow: '2px 2px 3px white'
}
const Isofi = (props:LogoProps) => {
    return (
        <Text style={logoStyles} weight="bold">
          {props.title}
        </Text>
      )
};

export default Isofi;