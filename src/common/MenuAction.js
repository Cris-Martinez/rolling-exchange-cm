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
            { icon: 'cogs', label: 'Configuracion', onPress: () => console.log('Pressed add') },
            {
              icon: 'account-box',
              label: 'Contacto',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'arrow-down-circle',
              label: 'Tarjeta',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'credit-card-outline',
              label: 'Recargas y pagos',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'cash-multiple',
              label: 'Operaciones de cambio',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'arrow-collapse',
              label: 'Transferencias',
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