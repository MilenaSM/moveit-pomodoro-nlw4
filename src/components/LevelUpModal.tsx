import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    const{ level, closeLevelUpModel } = useContext(ChallengesContext) 

    return(
        <div className={styles.overLay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={closeLevelUpModel}>
                    <img src="/icons/x.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
    )
}