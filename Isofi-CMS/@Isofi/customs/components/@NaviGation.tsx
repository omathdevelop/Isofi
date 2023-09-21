import {NavbarProps, useWorkspace} from 'sanity'
import {Card, Stack, Text} from '@sanity/ui'

const  NaviGation = (props: NavbarProps) => {
  const {dataset} = useWorkspace()

  return (
    <Stack>
      <Card padding={3} tone="primary">
        <Text size={1}>
          Using the <b>{dataset}</b> dataset
        </Text>
      </Card>

			
      {props.renderDefault(props)} {/* Render the default navbar */}
    </Stack>
  )
};

export default NaviGation;