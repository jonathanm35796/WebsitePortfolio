import { defineHosting } from '@aws-amplify/backend';

export const hosting = defineHosting({
  providers: {
    amplify: {
      platform: 'web',
      framework: 'nextjs',
      buildSteps: ['npm install', 'npm run build'],
      settings: {
        environmentVariables: {
          NEXT_TELEMETRY_DISABLED: '1',
          NODE_ENV: 'production'
        }
      }
    }
  }
});
