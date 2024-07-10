/**
 * msw 모킹 시, 전달된 path에
 * API url을 붙여줌
 */
export function createUrl(path: string) {
  return process.env.NEXT_PUBLIC_API_DEV_URL + path;
}
