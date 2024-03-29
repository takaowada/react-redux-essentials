import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../app/hooks';

import {
  fetchNotifications,
  selectAllNotifications,
} from '../features/notifications/notificationsSlice'

export const Navbar = () => {
  const dispatch = useAppDispatch()
  const notifications = useAppSelector(selectAllNotifications)
  const numUnreadNotifications = notifications.filter((n: { read: any; }) => !n.read).length

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications())
  }

  let unreadNotificationsBadge

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    )
  }

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">
              Notifications {unreadNotificationsBadge}
            </Link>
          </div>

          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  )
}
