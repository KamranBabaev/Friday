import preloader from './loader.gif'

export function Preloader() {
  return (
      <div>
        <img style={{zIndex: 1000}} src={preloader} alt='preloader'/>
      </div>
  )
}