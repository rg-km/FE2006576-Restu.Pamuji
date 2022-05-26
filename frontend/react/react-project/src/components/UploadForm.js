// TODO: answer here
import "../App.css"
import "../index.css"

export default function UploadForm({onSubmit}) {
  // TODO: answer here
  return (<div className="UploadForm">
 <div className='uploadForm' aria-label='Upload Form'>
  <form onSubmit={onSubmit} aria-label="upload Form">
    <input type="text" aria-label='Caption Input' placeholder='caption'/>
    <input type="text" aria-label='Image Input' placeholder="Image URL" />
    <button type="submit" aria-label='Submit Button' buttonOnClick = "" >Upload</button>
  </form>
 </div>
 </div>
  )
}