const EntryCard = ({ entry }) => {
  return (
    <div className="entry-card">
      <div className="entry-card__header">
        <div className="entry-card__header__title">{entry.title}</div>
        <div className="entry-card__header__date">{entry.date}</div>
      </div>
      <div className="entry-card__body">{entry.body}</div>
    </div>
  )
}

export default EntryCard
