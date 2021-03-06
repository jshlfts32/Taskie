var rewards = {
  init() {
    this.cacheDom();
    this.bindEvents();
    this.render();
  },
  cacheDom() {
    this.$rewardsArea = $('#rewardArea');
  },
  bindEvents() {
  },
  render() {
    this.myRewards();
  },
  myRewards() {
    $.ajax({
      url: '/rewards/api/curr_user',
      method: 'GET',
    }).done((response) => {
      for (let i = 0; i < response.length; i++) {
        const p =
          $(`<div class="task-space">
              <div class="row task-description-row">
                <div class="col-5 middle-this">
                  <p class="message-text">
                    <span class="italics">Subject:</span> ${response[i].description}
                  </p>
                </div>
                <div class="col-7 middle-this">
                  <p class="message-text">
                    <span class="italics">from:</span> ${response[i].Task.User.firstName} ${response[i].Task.User.lastName}
                  </p>
                </div>
              </div>
            <div class="row task-details-row">
              <h5>
                ${response[i].details}
              </h5>
            </div>
          </div>`);
        rewards.$rewardsArea.append(p);
      }
    });
  },
};

rewards.init();

$(document).on('click', '.task-description-row', function () {
  $(this).toggleClass('task-description-row-background');
  $(this).parent().find('.task-details-row').toggle(200);
});
