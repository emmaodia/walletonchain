import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text, Icon } from '@ui-kitten/components';

const NotificationIcon = (props) => (
  <Icon name='bell' {...props} />
)

export const CardItem = ({name, num}) => (
  <React.Fragment>
    <Card style={styles.card}>
      <View style={styles.cardItem}>
        <Text category='h6'>
        {name}
      </Text>
      <Text category='h5'>
        $ {num}
      </Text>
     
      <Button
      style={styles.button}
      size='small'
      status='basic'
      accessoryRight={NotificationIcon}
      />
      </View>
    </Card>
  </React.Fragment>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 2,
    width: '100%'
  },
  cardItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '10%',
  },
});