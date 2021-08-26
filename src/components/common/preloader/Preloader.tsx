import preloader from './loader.gif'

export function Preloader() {
  return (
      <div>
        <img style={{zIndex: 1000, position: "fixed", marginBottom: '25px'}} src={preloader} alt='preloader'/>
      </div>
  )
}