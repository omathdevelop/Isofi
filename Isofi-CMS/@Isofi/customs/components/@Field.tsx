import { Stack, Card, Text } from "@sanity/ui";
import { FieldProps } from "sanity";
const Field = (props:FieldProps) => {
    const {description, title, ...restProps} = props
    return (
      <Card border padding={3}>
        <Stack space={3} marginBottom={3}>
          <Text size={1} weight="bold">
            {title?.toUpperCase()}
          </Text>
          {description && (
            <Text size={1} style={{color: 'green'}}>
              {description}
            </Text>
          )}
        </Stack>
        {props.renderDefault(props)}
      </Card>
    )
  };

  export default Field;
  