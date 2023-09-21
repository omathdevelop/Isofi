import {Stack, Text} from '@sanity/ui'
import {InputProps} from 'sanity'
const StringInput = (props:InputProps) => {
    const isStringSchema = props.schemaType?.name === 'string';
  return (
    <>
        {isStringSchema? (
      <Stack space={3}>
      {props.renderDefault(props)}
      <Text size={1} style={{color: 'orange'}}>
        Characters: {props.value? 'Yes': 'No'}
      </Text>
    </Stack>

        ): (
          <>
                {props.renderDefault(props)}
          </>
        )}
    </>
  )
};

export default StringInput;

