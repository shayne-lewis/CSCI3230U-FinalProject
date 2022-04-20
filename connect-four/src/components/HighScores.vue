<template>
    <div id="HighScoresDiv">
        <table id="HighScoresTable">
            <tr>
                <th> Username </th>
                <th> Number Of Wins </th>
            </tr>
            <tr>
                <td>BOROWARO</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>NICHOLAS</td>
                <td>-1</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'HighScores',
}
</script>

<style scoped lang="scss">
    @import '../assets/Styles/HighScores.scss';
    @import '../assets/Mobile/HighScores.scss';
</style>
