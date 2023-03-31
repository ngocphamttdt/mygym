import {
  setupServer
} from 'msw/node'
import { rest } from 'msw'
import { IPhoto } from 'components/models/photo'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Photos } from './Photos';
import user from '@testing-library/user-event';


const server = setupServer(
  rest.get('https://6421599086992901b2b1200b.mockapi.io/getAll', (req, res, ctx) => {

    return res(
      ctx.json([
        {
          id: 1,
          thumbnailUrl: '/photo1.png',
          title: 'Hello World',
          favourite: true,
        } as IPhoto,
      ])
    );
  }),
  rest.put('https://6421599086992901b2b1200b.mockapi.io/getAll/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({

        id: 1,
        thumbnailUrl: '/photo1.png',
        title: 'Hello World',
        favourite: true,
      } as IPhoto
      )
    )
  }),
  rest.post('https://6421599086992901b2b1200b.mockapi.io/getAll', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({

        id: 1,
        thumbnailUrl: '/photo1.png',
        title: 'Hello World test',
        favourite: true,
      } as IPhoto
      )
    )
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('after application fully loads', () => {
  beforeEach(async () => {


  });
  it('renders the photos', async () => {
    render(<Photos />);
    await waitForElementToBeRemoved(screen.queryByText('Loading'))
    const findData = screen.getByText('Hello World')
    expect(findData).toBeInTheDocument()

  });
  it.skip('render postId value', async () => {
    render(<Photos />);
    const favouriteBtn = await screen.findByTestId('f-btn')
    user.click(favouriteBtn);
    //await new Promise((resolve) => setTimeout(resolve, 2000))
    const postIdVal = await screen.findByText('postId: Hello World')
    expect(postIdVal).toBeInTheDocument()
  });

  it.skip('render new post value', async () => {
    render(<Photos />);
    const createBtn = await screen.findByTestId('f-create')
    user.click(createBtn);
    const postIdVal = await screen.findByText('new post name: Hello World test')
    expect(postIdVal).toBeInTheDocument()
  })
});




