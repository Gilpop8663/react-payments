import { Meta, StoryObj } from '@storybook/react';
import RegisteredCard from '../../components/card/RegisteredCard';
import { useInput } from '../../hooks/useInput';

function RegisteredCardStories() {
  const cardTitle = useInput('', {
    name: 'cardTitleInput',
    maxLength: 20,
  });

  const cardInfo = {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '12',
    year: '28',
  };

  return (
    <RegisteredCard
      bankKind="default"
      createCard={() => {}}
      cardTitle={cardTitle}
      {...cardInfo}
    />
  );
}

const meta: Meta<typeof RegisteredCardStories> = {
  component: RegisteredCardStories,
  title: 'RegisteredCard',
};

export default meta;
type Story = StoryObj<typeof RegisteredCardStories>;

export const Default: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '12',
    year: '28',
  },
};
