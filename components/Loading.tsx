import LogoLoading from './LogoLoading'

export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
      <LogoLoading size={88} dotColor="currentColor" />
    </div>
  )
}
