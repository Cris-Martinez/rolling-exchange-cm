import React, { useState } from 'react';
import { FAB, Portal } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper'

const MenuAction = () => {
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <PaperProvider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'flash-circle' : 'bank'}
          actions={[
            { icon: 'cogs', label: 'Configurar', onPress: () => console.log('Pressed add') },
            {
              icon: 'arrow-down-circle',
              label: 'Extraccion sin tarjeta',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'credit-card-outline',
              label: 'Pagar servicios',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'cash-multiple',
              label: 'Operaciones de cambio',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'arrow-collapse',
              label: 'Transferir',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </PaperProvider>
  );
};

export default MenuAction;