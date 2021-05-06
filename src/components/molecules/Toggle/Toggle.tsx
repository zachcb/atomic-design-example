import { useMachine } from '@xstate/react';
import { Button } from '@/components/atoms/Button';
import { toggleMachine } from '@/services/utils/wallet/toggleMachine';
import { Wrapper } from './styles/Styled';

export function Toggle(): JSX.Element {
  const [current, send] = useMachine(toggleMachine);

  return (
    <Wrapper>
      <Button onClick={() => send('TOGGLE')}>
        {current.matches('inactive') ? 'Off' : 'On'}
      </Button>
    </Wrapper>
  );
}
