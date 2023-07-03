
const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info" >
                                        <img src="${user.avatarURL}" alt="Foto perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
                                            <div class="follows" >
                                                <div>
                                                    <span>Seguidores </span>
                                                    <p>${user.followers}</p>
                                                </div>
                                                <div>
                                                    <span>Seguindo </span>
                                                    <p>${user.following}</p>
                                                </div>   
                                            </div>                                                
                                        </div>
                                    </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank" >
                                            ${repo.name} 
                                            <div> 
                                                <span>🍴 ${repo.forks_count}</span> 
                                                <span>⭐ ${repo.stargazers_count}</span>
                                                <span>👁️ ${repo.watchers_count}</span>
                                                <span>👨‍💻 ${repo.language ?? "❌"} </span>
                                            </div>
                                        </a></li>`
        });

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section" > 
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`;
        }

       
   
        let eventItens = ''
        user.events.forEach((event) => {
            let eventCommitMessage = ''
            let eventName = ''

            eventName += event.repo.name

            if (event.payload.commits){
                event.payload.commits.forEach( eventCommit => {
                    eventCommitMessage += ` <span>- ${eventCommit.message} </span>`   
                })
            }else{
                eventCommitMessage += `- Novo branch`
            }

            eventItens += `<li><strong>${eventName}</strong> <div>${eventCommitMessage}</div></li>`

        });

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events" > 
                                                <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>
                                            </div>`
        }

    },
    renderNotFound(){
        this.userProfile.innerHTML += `<h2>Usuário não encontrado</h2>`                                  
    }
}

export { screen }