import './styles.css'
import { useEffect, useState } from 'react'
import { Genre } from 'utils/typesUtils'
import { BASE_URL, requestBackend } from 'utils/requests'
import Select from 'react-select'

type Props = {
  genre?: Genre
  handleChangeGenre: (genre: Genre) => void
}

const Filter = ({ genre, handleChangeGenre }: Props) => {
  const [isLoadingGenres, setIsLoadingGenres] = useState(false)
  const [genres, setGenres] = useState<Genre[]>()

  useEffect(() => {
    setIsLoadingGenres(true)

    requestBackend({ 
      url: '/genres',
      baseURL: BASE_URL,
      withCredentials: true,
    })
      .then(response => {
        setGenres(response.data)
      })
      .finally(() => {
        setIsLoadingGenres(false)
      })
  }, [])

  return (
    <div className="filter-container">
      <Select
        name="genres"
        key={ `select-${genre?.id}` }
        value={genre ? genre : {id:0,name:''}}
        isLoading={ isLoadingGenres }
        options={ genres }
        getOptionValue={ (option: Genre) => String(option.id) }
        getOptionLabel={ (option: Genre) => option.name }
        className="filter-select-container"
        classNamePrefix="genres-select"
        placeholder="Filtrar por gênero"
        isClearable
        onChange={ value => handleChangeGenre(value as Genre) }

      />
    </div>
  )
}

export default Filter