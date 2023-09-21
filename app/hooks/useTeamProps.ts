import { useLocalizeLink } from '~/hooks/useLocalizeLink'

export const useTeamProps = (teams: Array<any>) => {
  return teams.map((team: any) => {
    const [name, ...surname] = team.name.split(' ')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { l } = useLocalizeLink()

    return {
      ...team,
      name,
      surname: surname.join(' '),
      qualification: team.jobTitle,
      profileImageUrl: team.image?.responsiveImage?.src,
      to: l(`/team/${team.slug}`),
      chips: [
        ...team.categories?.map((c: any) => c.name),
        ...team.roles?.map((r: any) => r.name),
      ],
    }
  })
}
