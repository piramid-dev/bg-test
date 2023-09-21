import { useRouteError, isRouteErrorResponse } from '@remix-run/react'

const ErrorBoundary = () => {
  const error: any = useRouteError()
  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    )
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl">Uh oh ...</h1>
      <p>Something went wrong.</p>
      {error && error.length > 0
        ? error?.map((e: Error, index: any) => (
            <div key={index} className="bg-red-300">
              <pre>{e.message}</pre>
            </div>
          ))
        : null}
    </div>
  )
}

export default ErrorBoundary
