import type { Meta, StoryObj } from '@storybook/react'
import { ValidatedForm } from 'remix-validated-form'

import SurveyInput from './SurveyInput'

const meta = {
  title: 'Organisms/SurveyInput',
  component: SurveyInput,
  tags: ['autodocs'],
  args: {
    optional: false,
    title: 'Titolo domanda',
    placeholder: 'Scrivi qui la tua risposta',
    name: 'name',
    type: 'text',
  },
  decorators: [
    (Story: any) => (
      <div className="container flex justify-center bg-dove-500">
        <div className="w-1/3 py-5">
          <ValidatedForm
            validator={{
              validate: () =>
                Promise.resolve({
                  data: {},
                  error: undefined,
                  submittedData: {},
                }),
            }}
            method="post"
            noValidate
          >
            <Story />
          </ValidatedForm>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof SurveyInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
