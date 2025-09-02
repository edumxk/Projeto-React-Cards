import React from 'react';
import './Card.css';

interface CardProps {
  name: string;
  course: string;
  university: string;
  github: string;
}

export function Card(props: CardProps) {
    const username = props.github.split('/').pop();
    const avatarUrl = `https://github.com/${username}.png`;


  return (
    <div className="card-container">
      <img
        src={avatarUrl}
        alt={`Foto de perfil de ${props.name}`}
        className="card-avatar"
      />
      <h2>{props.name}</h2>
      <p>{props.course}</p>
      <p>{props.university}</p>
      <a href={props.github} target="_blank" rel="noopener noreferrer">
        Perfil no GitHub
      </a>
    </div>
  );
}
