import React, { useState } from 'react';
import { FAB, Portal } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper'

const MenuAction = ({ navigation }) => {
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
                  { icon: 'cogs', label: 'Configuracion', onPress: () => navigation.navigate('Perfil') },
                  {
                    icon: 'account-box',
                    label: 'Contacto',
                    onPress: () => navigation.navigate('Contacto'),
                  },
                  {
                    icon: 'credit-card-outline',
                    label: 'Tarjeta',
                    onPress: () => navigation.navigate('Tarjeta'),
                  },
                  {
                    icon: 'arrow-down-circle',
                    label: 'Recargas y pagos',
                    onPress: () => navigation.navigate('Recargas y Pagos'),
                  },
                  {
                    icon: 'cash-multiple',
                    label: 'Operaciones de cambio',
                    onPress: () => navigation.navigate('Operacion de Cambio'),
                  },
                  {
                    icon: 'arrow-collapse',
                    label: 'Transferencias',
                    onPress: () => navigation.navigate('Transferencias'),
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