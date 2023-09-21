import { createContext, useContext, useEffect, useReducer } from 'react'

import type { ChildrenElement } from '~/types/globalTypes'
import type {
  IdentityProviderState,
  IdentityProviderValue,
  CommerceLayerAppConfig,
} from '~/providers/types'
import getEnv from '~/utils/getEnv'
import { reducer } from '~/providers/reducer'
import { getSettings } from '~/utils/getSettings'
// import { DefaultSkeleton as DefaultSkeletonFC } from '~/components/DefaultSkeleton'

// import {
//   SkeletonTemplate,
//   withSkeletonTemplate,
// } from '#components/SkeletonTemplate'

interface IdentityProviderProps {
  /**
   * If needed, context value can be also accessed using a function as a child.
   *
   * Example:
   * ```
   * <IdentityProvider config={config}>
   *  {(ctx) => <div>identity</div>}
   * </IdentityProvider>
   * ```
   */
  children:
    | ((props: IdentityProviderValue) => ChildrenElement)
    | ChildrenElement
  config: CommerceLayerAppConfig
}

const IdentityContext = createContext<IdentityProviderValue>(
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  {} as IdentityProviderValue,
)
export const useIdentityContext = (): IdentityProviderValue =>
  useContext(IdentityContext)

export function IdentityProvider({
  config,
  children,
}: IdentityProviderProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
  } as IdentityProviderState)

  const env = getEnv()
  // const env = process.env
  // console.log('### provider', env)
  const clientId = env.CL_CLIENT_ID ?? ''
  const scope = env.CL_SCOPE ?? ''
  // let returnUrl = env.CL_RETURN_URL ?? ''

  useEffect(() => {
    dispatch({ type: 'identity/onLoad' })

    if (clientId != null && scope != null) {
      getSettings({ clientId, scope, config })
        .then((settings) => {
          if (settings.isValid) {
            dispatch({ type: 'identity/loaded', payload: settings })
          } else {
            dispatch({ type: 'identity/onError' })
          }
        })
        .catch(() => {
          dispatch({ type: 'identity/onError' })
        })
    }
  }, [clientId, config, scope])

  // TODO: we need to manage the error state
  // if (clientId.length === 0 || scope.length === 0 || returnUrl.length === 0) {
  //   return <div>Missing required parameters, status code 500</div>
  // }

  // TODO: we need to manage the loading state
  // if (state.isLoading) {
  //   // Skeleton loader
  //   // const DefaultSkeleton = withSkeletonTemplate(DefaultSkeletonFC)
  //   return (
  //     <div>is loading</div>
  //     // <SkeletonTemplate isLoading delayMs={0}>
  //     //   <DefaultSkeleton />
  //     // </SkeletonTemplate>
  //   )
  // }

  // if (state.settings === undefined || !state.settings?.isValid) {
  //   return <div>Application error, status code 500</div>
  // }

  const value: IdentityProviderValue = {
    settings: state.settings,
    config,
  }
  return (
    <IdentityContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </IdentityContext.Provider>
  )
}
