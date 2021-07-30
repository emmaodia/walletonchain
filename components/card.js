import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Layout, Text, Icon } from '@ui-kitten/components';

const NotificationIcon = (props) => (
  <Icon name='bell' {...props} />
)

const Header = (props) => (
  <View {...props}>
    <Text category='h6'>Maldives</Text>
    <Text category='s1'>By Wikipedia</Text>
  </View>
);

const Footer = (props) => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Button
      style={styles.footerControl}
      size='small'
      status='basic'
      accessoryRight={NotificationIcon}
      >
      
    </Button>
    {/* <Button
      style={styles.footerControl}
      size='small'>
      ACCEPT
    </Button> */}
  </View>
);

export const CardItem = ({num}) => (
  <React.Fragment>
    <Card style={styles.card} header={Header} footer={Footer}>
      <Text>
        $ {num}
      </Text>
    </Card>
  </React.Fragment>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 2,
    width: '100%'
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});